class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.string :author
      t.string :category
      t.text :content

      t.timestamps
    end
    add_index :quotes, [:category]
  end
end
