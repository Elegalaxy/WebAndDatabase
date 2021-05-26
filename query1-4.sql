SELECT DISTINCT address.address FROM address, store, inventory, film
WHERE inventory.store_id = store.store_id
AND address.address_id = store.address_id
AND inventory.film_id = 918;