class AddOwner < ActiveRecord::Migration
  def change
    add_column :cards, :owner_id, :integer
  end
end
