export const fetchBusinesses = () => (
  $.ajax({
    url: '/api/businesses'
  })
);

export const fetchBusiness = businessId => (
  $.ajax({
    url: `/api/businesses/${businessId}`
  })
);

