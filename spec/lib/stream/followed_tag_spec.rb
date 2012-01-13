require 'spec_helper'
require File.join(Rails.root, 'spec', 'shared_behaviors', 'stream')

describe Stream::FollowedTag do
  before do
    @stream = Stream::FollowedTag.new(alice, :max_time => Time.now, :order => 'updated_at')
    @stream.stub(:tag_string).and_return("foo")
  end

  describe 'shared behaviors' do
    it_should_behave_like 'it is a stream'
  end
end
