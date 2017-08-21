source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.3'
gem 'sqlite3'
gem 'puma', '~> 3.7'
gem 'bcrypt', '~> 3.1.7'

gem 'webpacker', '~> 2.0'
gem 'wicked', '~> 1.3', '>= 1.3.2'
gem 'annotate'


#### These are gems I need to research before I actually bundle install them ####
# First of 2 auth gems we could use JSON Web Tokens #
#gem 'jwt', '~> 1.5', '>= 1.5.6'
# Second of the 2 called Knock, it looks like a much lighter and more specific utilization of JSON web Tokens #
#gem 'knock', '~> 2.1', '>= 2.1.1'


group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'database_cleaner', '~> 1.6', '>= 1.6.1'
  gem 'rspec'
  gem 'rspec-rails'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
