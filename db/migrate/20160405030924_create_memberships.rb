class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :user_id
      t.integer :card_id

      t.index :user_id
      t.index :card_id

      t.timestamps null: false
    end
  end
end