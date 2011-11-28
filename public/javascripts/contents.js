$(function () {
    var target = null,
        that = {};

    that.wrap_event = function (node) {
        target.before("<" + node + ">" + target.html() + "</" + node + ">");
        that.attach_input_area(target.prev());
        target.remove();
    };

    that.attach_input_area = function (nodes) {
        nodes.click(function () {
            $("#-manager-input-h1-area").val(target.html().replace(/<br>/ig,"\r\n"));
            $("#-manager-input-h1-div").dialog('open');
            $("#-manager-input-h1-area").focus();
        });
        nodes.mouseover(function () {
            target = $(this);
            $(this).addClass("-manager-select");
        });
        nodes.mouseout(function () {
            $(this).removeClass("-manager-select");
        });
        nodes.contextMenu('-manager-context-menu',{bindings: {
            '-manager-add_node': function(t) {
                target.before("<div>新挿入領域</div>");
                that.attach_input_area(target.prev());
            },
            '-manager-delete_node': function(t) {
                target.remove();
            },
            '-manager-change_p': function(t) {
                that.wrap_event("p")
            },
            '-manager-change_h1': function(t) {
                that.wrap_event("h1")
            },
            '-manager-change_h2': function(t) {
                that.wrap_event("h2")
            },
            '-manager-change_h3': function(t) {
                that.wrap_event("h3")
            },
            '-manager-change_h4': function(t) {
                that.wrap_event("h4")
            },
            '-manager-change_h5': function(t) {
                that.wrap_event("h5")
            },
            '-manager-change_h6': function(t) {
                that.wrap_event("h6")
            }
        }});
    };

    that.attach_input_area($("h1,h2,h3,h4,h5,h6,p"));

    $("#-manager-input-h1-div").dialog({
        autoOpen: false,
        width: 600,
        height: 350,
        modal: true,
        buttons: {
            "Update": function () {
                var val = $("#-manager-input-h1-area").val().replace(/\r\n/g, "<br>").replace(/(\n|\r)/g, "<br>");
                if (val === "") {
                    target.remove();
                } else {
                    target.html(val);
                }
                $(this).dialog('close');
            },
            "Delete": function () {
                target.remove();
                $(this).dialog('close');
            },
            "Cancel": function () {
                $(this).dialog('close');
            }
        }
    });
 
});
