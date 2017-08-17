class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :user_id
      t.integer :phone_number

      t.timestamps
    end
  end
end
