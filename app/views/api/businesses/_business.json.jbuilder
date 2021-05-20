json.extract! business, 
              :id, 
              :name, 
              :category, 
              :address, 
              :city, 
              :state, 
              :zip_code,
              :phone_number,
              :website_url,
              :owner_id,
              :lat,
              :lng,
              :message,
              :hours,
              :days
            
if business.photo.attached?
  json.photoUrl url_for(business.photo)
end

if business.photos.attached?
  json.photoUrls business.photos.map { |photo| url_for(photo) }
end