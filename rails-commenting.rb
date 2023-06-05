# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# Define BlogPostsController class and index method
class BlogPostsController < ApplicationController
  def index
    # create an instance to view all posts
     @posts = BlogPost.all
  end

  # define a show controller method to find the post with the matching id and show the post
  def show
    @post = BlogPost.find(params[:id])
  end

  # define a new controller method to create a new blog post
  def new
    @post = BlogPost.new
  end

  def create
    # create a new blog post based on params and if valid redirect to show post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # find a blog post based on id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # finds a specific blog post based on the id params and update it with the params received from the form if valid
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # delete specified blog and redirect to index
      redirect_to blog_posts_path
    end
  end

  # make private to control access to the blog post create/edit/update methods
  private
  def blog_post_params
    # set blog post requirement params for title and content
    params.require(:blog_post).permit(:title, :content)
  end
end
