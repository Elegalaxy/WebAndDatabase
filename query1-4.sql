SELECT DISTINCT address.address FROM address, store, inventory, film
WHERE inventory.store_id = store.store_id
AND film.title = "TWISTED PIRATES";