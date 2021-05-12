json.extract! review, :id, :rating, :body, :business_id, :author_id, :created_at

json.reviewerFirstName review.author.first_name
json.reviewerLastName review.author.last_name
json.reviewerId review.author.id
