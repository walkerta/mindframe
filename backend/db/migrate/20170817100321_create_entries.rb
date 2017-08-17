class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.string :title
      t.text :body
      t.boolean :published
      t.integer :entry_id
      t.integer :good_day

      t.timestamps
    end
  end
end
