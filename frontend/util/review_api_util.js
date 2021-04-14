export const fetchReviews = () => (
  $.ajax({
    url: `/api/reviews`,
  })
);

export const fetchReview = reviewId => (
  $,ajax({
    url: `/api/reviews/${reviewId}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `/api/reviews`,
    data: { review }
  })
);

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    method: { review }
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
);

