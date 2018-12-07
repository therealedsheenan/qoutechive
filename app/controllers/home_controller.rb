# frozen_string_literal: true

require 'httparty'
require 'json'

# Home page controller
class HomeController < ApplicationController
  layout 'main'

  def index
    @hello_world_props = { name: 'Sheenan' }
    @random_quotes = JSON.parse(fetch_random_quotes)
  end

  private

  # fetching data from third-party API
  # for more info see:
  # https://rapidapi.com/andruxnet/api/Random%20Famous%20Quotes/functions/GET%20endpoint
  def fetch_random_quotes
    api_address = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10'
    api_key = 'ftPXaudh3AmshGaCoqgSOjqETX0jp14ejQ6jsnSdFn6LyK8FGT'
    host_address = 'andruxnet-random-famous-quotes.p.rapidapi.com'
    headers = {
      'X-Mashape-Key': api_key,
      'X-Mashape-Host': host_address
    }
    call_api(api_address, headers)
  end

  def call_api(uri, headers)
    begin
      response = HTTParty.get(uri, headers: headers)
    rescue StandardError => error
      print error
      response = '[]'
    end
    response.instance_of?(String) ? response : response.body
  end
end
