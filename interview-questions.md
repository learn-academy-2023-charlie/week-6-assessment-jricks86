# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:  You would add the foreign key using a migration command and make the update in the file created. The name would be cohort_id and it would in the Student model.

Researched answer: Generate a new migration in Rails and add the foreign key column to the students table by running a rails generate migration command. This will create a new migration file in the db/migrate directory.

Open the newly generated migration file and update it by using the change method of the migration file, and add the foreign key reference to the students table. Run the migration using rails db:migrate command.



2. Which RESTful routes must always be passed params? Why?

Your answer: Create, Update, and Destroy becuase they are all creating or updating data.

Researched answer: Index, Show, New, and Edit all display data.

3. Name three rails generator commands. What is created by each?

Your answer: Rails generate model is used to create a model and rails generate controller to create a controller.  Rails generate migration to change the database.

Researched answer: Rails generate model is used to create a model and rails generate controller to create a controller.  Rails generate migratation is a way to manage database schema changes. Rails generate helper to create a helper and Rails generate model view to create a view.  Rails generate helper view if you are creating a view for a “view” model. Rails generate resource is used to create model, migration, controller, spec files, and all the RESTful routes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The controller method would be "index" and it would display all students.

action: "POST" location: /students
The controller method would be “create” and it would add a new student to the database.

action: "GET" location: /students/new
The controller method would be "new" and it would display a page that allows the user to create a new student.

action: "GET" location: /students/2
The controller method would be "show" and it would display the details of the student with the ID of 2.

action: "GET" location: /students/2/edit
The controller method would be "edit" and it would display a page that allows the user to edit the details of the student with the ID of 2.

action: "PATCH" location: /students/2
The controller method would be "update" and it would update the details of the student with the ID of 2.

action: "DELETE" location: /students/2
The controller method would be "destroy" and it would remove the student with the ID of 2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user, I want to be able to add items to my to-do list.
As a user, I want to be able to view my existing items in my list.
As a user, I want to add due dates to my list items.
As a user, I want to be able to mark an item as complete.
As a user, I want to be able to delete items I have marked as complete.
As a user, I want to be able to edit items I've added to my list.
As a user, I want to be able to add a priority to items in my list.
As a user, I want to be able to categorize items in my list.
As a user, I want to be able to search or filter tasks based on category or priority.
As a user, I want to be able to receive reminders or notifications for upcoming or overdue items on my list.