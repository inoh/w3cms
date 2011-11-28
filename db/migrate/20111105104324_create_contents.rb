class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :title
      t.text :note
      t.string :url

      t.timestamps
    end
  end
end
