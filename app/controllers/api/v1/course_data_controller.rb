module Api
  module V1
    class CourseDataController < ApplicationController
      respond_to :json

      def show
        course = Course.where(university: params[:university],
                                  department: params[:department], 
                                  number: params[:course_number]).first
        respond_with course.to_json(:include => {:sections => {:except => [:created_at, :updated_at], :include => {:meetings => {:except => [:created_at, :updated_at]}}},
                                                 :instructors => {:except => [:created_at, :updated_at], :include => {:meetings => {:except => [:created_at, :updated_at]}}}},
                                    :except => [:created_at, :updated_at])      
      end
    end
  end
end