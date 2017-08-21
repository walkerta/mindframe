# == Schema Information
#
# Table name: entries
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :text
#  published  :boolean
#  entry_id   :integer
#  good_day   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Entry < ApplicationRecord
  belongs_to :user
end
