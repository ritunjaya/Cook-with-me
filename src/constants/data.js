const dataNew = {
    "recipe": {
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0209cb28fc05320434e2916988f47b71",
      "label": "White Pizza",
      "image": "https://edamam-product-images.s3.amazonaws.com/web-img/dfe/dfe2e44c86334a3a3a5f774dda576121.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQC3AVe4RfUkVRzn7HCQIRkuX7p%2FJryX3Qo3JeTdZyX4tAIgBpkBjMH3eZ3Q0YGZ0%2BFELi5gpheKA0fh7Ztio7LlzhoqwQUI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDI7iAc1xPoG8dclSiSqVBfm1tUREomEaHS02%2B3wEzOljkd%2FwzeZfEgdfB6dvLz5aY%2FcsNiRXjI6bWOCJ9DjOVqC5kBvV7sVZrKT0AB%2FAa3IHUjZQGBJdpSbODrw3m2l8uWZDtSKv2%2BJgs2P7%2B1TZhdFu6vr3C9jlWnYkye%2FM3PkZD7%2BD9df9cRcjd%2FhlrGbF4CN5EAlIctsbsqRXil9j4Kf4pj5cpQeEqX9o4C6jwcNL11D3Vcc7XJzCMJDDhOcqCc7S%2BNwM82CAbHLiCD3MmnemiK8DJYPsx21tb2e5NmFhH5UZAK8wV6d5qRBMjNP6dPN6D3UeIA9MUdKYlo%2F3NjjTvp7WiVb9St8pRAmLkQzCaorzJkUWucziukH8Spz9W40FSAo6q0uf7JIkS5QUJBAK8DGS%2BrcslXpCZbZAZgkDcxRc1tkZJGCZVNBqazUKrrIMowIXKUOhr%2Byc5BtGeBXV8PTaKKo0jtcZA29xxWvQh2r1WQCdzuAjYzqtbTc8b0RzwLTayKt0z5r3tP%2F1T4tZ8%2FKn2WpOYp17f4sBBMv%2BJDc8lyFd4V27C8L%2FAY%2BnAgWesYbTxU9CfnNB%2F3%2F5DBf5ms2UaYo8Kc3Q%2FifUxwM7qApkKq9LChjlCpqnwRM6XeUwU96aeUWfl%2F1V2nyC6jEAdv%2FSmcCI1SsstzaG2Spi4nwO9%2BzV9%2Bs3WSHcVmBCjesdJv2Z5yyn%2FFV%2BuYf4CHVgoESEpnpDbFKncm9XmPAzpjoMzpGcMqr3BA56verjtG1U4R8eh1oJ4pPKMTKo3inPsss5v0OEq9jZLAWPS%2BqNl5HsBg3aMpp4Dp7blRe%2BckQ7EYGQPQpYAqqwVphG1vob2z6DYZz0nDhf7kMoYI5upH%2FbCPQFrsXgqLwbgWoA2wiT9vYw0tPepgY6sQEF6rTXAC77QVkafRlNdr55dl7WULB0Ov7n%2FErP3%2BywfpQwAU8y84HRg%2BmXAs5c8DQpQr0aTKn2JJui7FOTs6q%2Fus7ZKdv4pf2H5TU9YGovjznQi266WQgcyYI4NsxFQzarpNEiggZ02%2F79Z3eYY0QcE8Xz8Hn%2BFMFLm%2FwuZCzMMtlSN5b3gRcpOxWhhBhFYfvft3SCf2WxBM6hVSh7eoiR7W5HFxe%2FzFuNFGPeO0t%2FRt0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T171313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPMDE2Y3U%2F20230812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2939d5a8ae93809a2e386b18ed66477513bcbe2364835dce380638ccb93c8c3d",
      "images": {
        "THUMBNAIL": {
          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dfe/dfe2e44c86334a3a3a5f774dda576121-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQC3AVe4RfUkVRzn7HCQIRkuX7p%2FJryX3Qo3JeTdZyX4tAIgBpkBjMH3eZ3Q0YGZ0%2BFELi5gpheKA0fh7Ztio7LlzhoqwQUI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDI7iAc1xPoG8dclSiSqVBfm1tUREomEaHS02%2B3wEzOljkd%2FwzeZfEgdfB6dvLz5aY%2FcsNiRXjI6bWOCJ9DjOVqC5kBvV7sVZrKT0AB%2FAa3IHUjZQGBJdpSbODrw3m2l8uWZDtSKv2%2BJgs2P7%2B1TZhdFu6vr3C9jlWnYkye%2FM3PkZD7%2BD9df9cRcjd%2FhlrGbF4CN5EAlIctsbsqRXil9j4Kf4pj5cpQeEqX9o4C6jwcNL11D3Vcc7XJzCMJDDhOcqCc7S%2BNwM82CAbHLiCD3MmnemiK8DJYPsx21tb2e5NmFhH5UZAK8wV6d5qRBMjNP6dPN6D3UeIA9MUdKYlo%2F3NjjTvp7WiVb9St8pRAmLkQzCaorzJkUWucziukH8Spz9W40FSAo6q0uf7JIkS5QUJBAK8DGS%2BrcslXpCZbZAZgkDcxRc1tkZJGCZVNBqazUKrrIMowIXKUOhr%2Byc5BtGeBXV8PTaKKo0jtcZA29xxWvQh2r1WQCdzuAjYzqtbTc8b0RzwLTayKt0z5r3tP%2F1T4tZ8%2FKn2WpOYp17f4sBBMv%2BJDc8lyFd4V27C8L%2FAY%2BnAgWesYbTxU9CfnNB%2F3%2F5DBf5ms2UaYo8Kc3Q%2FifUxwM7qApkKq9LChjlCpqnwRM6XeUwU96aeUWfl%2F1V2nyC6jEAdv%2FSmcCI1SsstzaG2Spi4nwO9%2BzV9%2Bs3WSHcVmBCjesdJv2Z5yyn%2FFV%2BuYf4CHVgoESEpnpDbFKncm9XmPAzpjoMzpGcMqr3BA56verjtG1U4R8eh1oJ4pPKMTKo3inPsss5v0OEq9jZLAWPS%2BqNl5HsBg3aMpp4Dp7blRe%2BckQ7EYGQPQpYAqqwVphG1vob2z6DYZz0nDhf7kMoYI5upH%2FbCPQFrsXgqLwbgWoA2wiT9vYw0tPepgY6sQEF6rTXAC77QVkafRlNdr55dl7WULB0Ov7n%2FErP3%2BywfpQwAU8y84HRg%2BmXAs5c8DQpQr0aTKn2JJui7FOTs6q%2Fus7ZKdv4pf2H5TU9YGovjznQi266WQgcyYI4NsxFQzarpNEiggZ02%2F79Z3eYY0QcE8Xz8Hn%2BFMFLm%2FwuZCzMMtlSN5b3gRcpOxWhhBhFYfvft3SCf2WxBM6hVSh7eoiR7W5HFxe%2FzFuNFGPeO0t%2FRt0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T171313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPMDE2Y3U%2F20230812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f919ee6c75a93643a10ed87364e7c9f7ccec3abc8d1fc6579858f3c5dbbb4263",
          "width": 100,
          "height": 100
        },
        "SMALL": {
          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dfe/dfe2e44c86334a3a3a5f774dda576121-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQC3AVe4RfUkVRzn7HCQIRkuX7p%2FJryX3Qo3JeTdZyX4tAIgBpkBjMH3eZ3Q0YGZ0%2BFELi5gpheKA0fh7Ztio7LlzhoqwQUI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDI7iAc1xPoG8dclSiSqVBfm1tUREomEaHS02%2B3wEzOljkd%2FwzeZfEgdfB6dvLz5aY%2FcsNiRXjI6bWOCJ9DjOVqC5kBvV7sVZrKT0AB%2FAa3IHUjZQGBJdpSbODrw3m2l8uWZDtSKv2%2BJgs2P7%2B1TZhdFu6vr3C9jlWnYkye%2FM3PkZD7%2BD9df9cRcjd%2FhlrGbF4CN5EAlIctsbsqRXil9j4Kf4pj5cpQeEqX9o4C6jwcNL11D3Vcc7XJzCMJDDhOcqCc7S%2BNwM82CAbHLiCD3MmnemiK8DJYPsx21tb2e5NmFhH5UZAK8wV6d5qRBMjNP6dPN6D3UeIA9MUdKYlo%2F3NjjTvp7WiVb9St8pRAmLkQzCaorzJkUWucziukH8Spz9W40FSAo6q0uf7JIkS5QUJBAK8DGS%2BrcslXpCZbZAZgkDcxRc1tkZJGCZVNBqazUKrrIMowIXKUOhr%2Byc5BtGeBXV8PTaKKo0jtcZA29xxWvQh2r1WQCdzuAjYzqtbTc8b0RzwLTayKt0z5r3tP%2F1T4tZ8%2FKn2WpOYp17f4sBBMv%2BJDc8lyFd4V27C8L%2FAY%2BnAgWesYbTxU9CfnNB%2F3%2F5DBf5ms2UaYo8Kc3Q%2FifUxwM7qApkKq9LChjlCpqnwRM6XeUwU96aeUWfl%2F1V2nyC6jEAdv%2FSmcCI1SsstzaG2Spi4nwO9%2BzV9%2Bs3WSHcVmBCjesdJv2Z5yyn%2FFV%2BuYf4CHVgoESEpnpDbFKncm9XmPAzpjoMzpGcMqr3BA56verjtG1U4R8eh1oJ4pPKMTKo3inPsss5v0OEq9jZLAWPS%2BqNl5HsBg3aMpp4Dp7blRe%2BckQ7EYGQPQpYAqqwVphG1vob2z6DYZz0nDhf7kMoYI5upH%2FbCPQFrsXgqLwbgWoA2wiT9vYw0tPepgY6sQEF6rTXAC77QVkafRlNdr55dl7WULB0Ov7n%2FErP3%2BywfpQwAU8y84HRg%2BmXAs5c8DQpQr0aTKn2JJui7FOTs6q%2Fus7ZKdv4pf2H5TU9YGovjznQi266WQgcyYI4NsxFQzarpNEiggZ02%2F79Z3eYY0QcE8Xz8Hn%2BFMFLm%2FwuZCzMMtlSN5b3gRcpOxWhhBhFYfvft3SCf2WxBM6hVSh7eoiR7W5HFxe%2FzFuNFGPeO0t%2FRt0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T171313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPMDE2Y3U%2F20230812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b7db78128bcd71f5029fd5cf83e27a1ade81dbdcaebcd977b710f1ba8cc7d964",
          "width": 200,
          "height": 200
        },
        "REGULAR": {
          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dfe/dfe2e44c86334a3a3a5f774dda576121.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQC3AVe4RfUkVRzn7HCQIRkuX7p%2FJryX3Qo3JeTdZyX4tAIgBpkBjMH3eZ3Q0YGZ0%2BFELi5gpheKA0fh7Ztio7LlzhoqwQUI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDI7iAc1xPoG8dclSiSqVBfm1tUREomEaHS02%2B3wEzOljkd%2FwzeZfEgdfB6dvLz5aY%2FcsNiRXjI6bWOCJ9DjOVqC5kBvV7sVZrKT0AB%2FAa3IHUjZQGBJdpSbODrw3m2l8uWZDtSKv2%2BJgs2P7%2B1TZhdFu6vr3C9jlWnYkye%2FM3PkZD7%2BD9df9cRcjd%2FhlrGbF4CN5EAlIctsbsqRXil9j4Kf4pj5cpQeEqX9o4C6jwcNL11D3Vcc7XJzCMJDDhOcqCc7S%2BNwM82CAbHLiCD3MmnemiK8DJYPsx21tb2e5NmFhH5UZAK8wV6d5qRBMjNP6dPN6D3UeIA9MUdKYlo%2F3NjjTvp7WiVb9St8pRAmLkQzCaorzJkUWucziukH8Spz9W40FSAo6q0uf7JIkS5QUJBAK8DGS%2BrcslXpCZbZAZgkDcxRc1tkZJGCZVNBqazUKrrIMowIXKUOhr%2Byc5BtGeBXV8PTaKKo0jtcZA29xxWvQh2r1WQCdzuAjYzqtbTc8b0RzwLTayKt0z5r3tP%2F1T4tZ8%2FKn2WpOYp17f4sBBMv%2BJDc8lyFd4V27C8L%2FAY%2BnAgWesYbTxU9CfnNB%2F3%2F5DBf5ms2UaYo8Kc3Q%2FifUxwM7qApkKq9LChjlCpqnwRM6XeUwU96aeUWfl%2F1V2nyC6jEAdv%2FSmcCI1SsstzaG2Spi4nwO9%2BzV9%2Bs3WSHcVmBCjesdJv2Z5yyn%2FFV%2BuYf4CHVgoESEpnpDbFKncm9XmPAzpjoMzpGcMqr3BA56verjtG1U4R8eh1oJ4pPKMTKo3inPsss5v0OEq9jZLAWPS%2BqNl5HsBg3aMpp4Dp7blRe%2BckQ7EYGQPQpYAqqwVphG1vob2z6DYZz0nDhf7kMoYI5upH%2FbCPQFrsXgqLwbgWoA2wiT9vYw0tPepgY6sQEF6rTXAC77QVkafRlNdr55dl7WULB0Ov7n%2FErP3%2BywfpQwAU8y84HRg%2BmXAs5c8DQpQr0aTKn2JJui7FOTs6q%2Fus7ZKdv4pf2H5TU9YGovjznQi266WQgcyYI4NsxFQzarpNEiggZ02%2F79Z3eYY0QcE8Xz8Hn%2BFMFLm%2FwuZCzMMtlSN5b3gRcpOxWhhBhFYfvft3SCf2WxBM6hVSh7eoiR7W5HFxe%2FzFuNFGPeO0t%2FRt0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T171313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPMDE2Y3U%2F20230812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2939d5a8ae93809a2e386b18ed66477513bcbe2364835dce380638ccb93c8c3d",
          "width": 300,
          "height": 300
        },
        "LARGE": {
          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dfe/dfe2e44c86334a3a3a5f774dda576121-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQC3AVe4RfUkVRzn7HCQIRkuX7p%2FJryX3Qo3JeTdZyX4tAIgBpkBjMH3eZ3Q0YGZ0%2BFELi5gpheKA0fh7Ztio7LlzhoqwQUI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDI7iAc1xPoG8dclSiSqVBfm1tUREomEaHS02%2B3wEzOljkd%2FwzeZfEgdfB6dvLz5aY%2FcsNiRXjI6bWOCJ9DjOVqC5kBvV7sVZrKT0AB%2FAa3IHUjZQGBJdpSbODrw3m2l8uWZDtSKv2%2BJgs2P7%2B1TZhdFu6vr3C9jlWnYkye%2FM3PkZD7%2BD9df9cRcjd%2FhlrGbF4CN5EAlIctsbsqRXil9j4Kf4pj5cpQeEqX9o4C6jwcNL11D3Vcc7XJzCMJDDhOcqCc7S%2BNwM82CAbHLiCD3MmnemiK8DJYPsx21tb2e5NmFhH5UZAK8wV6d5qRBMjNP6dPN6D3UeIA9MUdKYlo%2F3NjjTvp7WiVb9St8pRAmLkQzCaorzJkUWucziukH8Spz9W40FSAo6q0uf7JIkS5QUJBAK8DGS%2BrcslXpCZbZAZgkDcxRc1tkZJGCZVNBqazUKrrIMowIXKUOhr%2Byc5BtGeBXV8PTaKKo0jtcZA29xxWvQh2r1WQCdzuAjYzqtbTc8b0RzwLTayKt0z5r3tP%2F1T4tZ8%2FKn2WpOYp17f4sBBMv%2BJDc8lyFd4V27C8L%2FAY%2BnAgWesYbTxU9CfnNB%2F3%2F5DBf5ms2UaYo8Kc3Q%2FifUxwM7qApkKq9LChjlCpqnwRM6XeUwU96aeUWfl%2F1V2nyC6jEAdv%2FSmcCI1SsstzaG2Spi4nwO9%2BzV9%2Bs3WSHcVmBCjesdJv2Z5yyn%2FFV%2BuYf4CHVgoESEpnpDbFKncm9XmPAzpjoMzpGcMqr3BA56verjtG1U4R8eh1oJ4pPKMTKo3inPsss5v0OEq9jZLAWPS%2BqNl5HsBg3aMpp4Dp7blRe%2BckQ7EYGQPQpYAqqwVphG1vob2z6DYZz0nDhf7kMoYI5upH%2FbCPQFrsXgqLwbgWoA2wiT9vYw0tPepgY6sQEF6rTXAC77QVkafRlNdr55dl7WULB0Ov7n%2FErP3%2BywfpQwAU8y84HRg%2BmXAs5c8DQpQr0aTKn2JJui7FOTs6q%2Fus7ZKdv4pf2H5TU9YGovjznQi266WQgcyYI4NsxFQzarpNEiggZ02%2F79Z3eYY0QcE8Xz8Hn%2BFMFLm%2FwuZCzMMtlSN5b3gRcpOxWhhBhFYfvft3SCf2WxBM6hVSh7eoiR7W5HFxe%2FzFuNFGPeO0t%2FRt0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230812T171313Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPMDE2Y3U%2F20230812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d12646ad528b3598680050a40eb090ac468b15a95a9ce5150d87ea966d37b2ca",
          "width": 600,
          "height": 600
        }
      },
      "source": "Food52",
      "url": "https://food52.com/recipes/40095-white-pizza",
      "shareAs": "http://www.edamam.com/recipe/white-pizza-0209cb28fc05320434e2916988f47b71/-",
      "yield": 1.0,
      "dietLabels": [
        "Balanced",
        "High-Fiber"
      ],
      "healthLabels": [
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Egg-Free",
        "Peanut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher"
      ],
      "cautions": [
        "Sulfites",
        "FODMAP"
      ],
      "ingredientLines": [
        "1 pound pizza dough thawed if frozen (I prefer Trader Joe’s pizza dough in the refrigerator department)",
        "1/4 cup store bought pesto, well drained",
        "1/3 cup whole milk ricotta cheese",
        "4 ounces burrata cheese, finely chopped",
        "1/4 cup fresh spinach, finely chopped",
        "Fresh ground pepper"
      ],
      "ingredients": [
        {
          "text": "1 pound pizza dough thawed if frozen (I prefer Trader Joe’s pizza dough in the refrigerator department)",
          "quantity": 1.0,
          "measure": "pound",
          "food": "pizza dough",
          "weight": 453.59237,
          "foodCategory": "bread, rolls and tortillas",
          "foodId": "food_bq98fb1beuvdwxax58q1cayt7w6k",
          "image": "https://www.edamam.com/food-img/19f/19fc0706f04d44f62fc79ab4d7a07d7b.jpg"
        },
        {
          "text": "1/4 cup store bought pesto, well drained",
          "quantity": 0.25,
          "measure": "cup",
          "food": "pesto",
          "weight": 68.0,
          "foodCategory": "condiments and sauces",
          "foodId": "food_amlzb2yam5vuysaaikhe3a68ojnn",
          "image": "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg"
        },
        {
          "text": "1/3 cup whole milk ricotta cheese",
          "quantity": 0.3333333333333333,
          "measure": "cup",
          "food": "whole milk ricotta cheese",
          "weight": 82.66666666666666,
          "foodCategory": "Cheese",
          "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
          "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
        },
        {
          "text": "4 ounces burrata cheese, finely chopped",
          "quantity": 4.0,
          "measure": "ounce",
          "food": "cheese",
          "weight": 113.3980925,
          "foodCategory": "Cheese",
          "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
          "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
        },
        {
          "text": "1/4 cup fresh spinach, finely chopped",
          "quantity": 0.25,
          "measure": "cup",
          "food": "spinach",
          "weight": 7.5,
          "foodCategory": "vegetables",
          "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
          "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
        },
        {
          "text": "Fresh ground pepper",
          "quantity": 0.0,
          "measure": null,
          "food": "ground pepper",
          "weight": 2.1754713875,
          "foodCategory": "Condiments and sauces",
          "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
        }
      ],
      "calories": 1989.1412876284116,
      "totalCO2Emissions": 5437.905441721123,
      "co2EmissionsClass": "G",
      "totalWeight": 727.3326005541667,
      "totalTime": 0.0,
      "cuisineType": [
        "italian"
      ],
      "mealType": [
        "lunch/dinner"
      ],
      "dishType": [
        "main course"
      ],
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 1989.1412876284116,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 80.0700652976988,
          "unit": "g"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 32.107114566912095,
          "unit": "g"
        },
        "FATRN": {
          "label": "Trans",
          "quantity": 0.35239070289999996,
          "unit": "g"
        },
        "FAMS": {
          "label": "Monounsaturated",
          "quantity": 15.10005133673696,
          "unit": "g"
        },
        "FAPU": {
          "label": "Polyunsaturated",
          "quantity": 7.412222949463918,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 235.0221786486583,
          "unit": "g"
        },
        "CHOCDF.net": {
          "label": "Carbohydrates (net)",
          "quantity": 223.63527720189046,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 11.386901446767839,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars",
          "quantity": 22.086416013880005,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 79.08789478646668,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 158.11909284840826,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 4320.9838182358335,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 1582.2147909872617,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 174.72989058095834,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium",
          "quantity": 900.46085855375,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron",
          "quantity": 18.048750156488424,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 8.214841732844585,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 1081.2929838339169,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 517.1139489996251,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 2.1075,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 2.6917392159901667,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 2.2058128587641668,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 20.852352179725834,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 0.6477210942542917,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 647.5859101775417,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate (food)",
          "quantity": 511.50819917754177,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 81.6466266,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 1.950045684166667,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 0.8457218883333334,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 2.3863525655133335,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 57.03143172883334,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 279.87990404677083,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 99.45706438142058,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 123.18471584261354,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 160.53557283456047,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 78.34072621621944,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 45.547605787071355,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 158.17578957293335,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 52.70636428280275,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 180.04099242649306,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 158.22147909872618,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 41.60235490022818,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 19.158741671356385,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 100.27083420271347,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 74.68037938949622,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 154.47042626198814,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 57.45710544440279,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 2.341666666666667,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 224.31160133251393,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 169.6779122126282,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 130.32720112328647,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 49.82469955802243,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 161.89647754438542,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 81.25190350694446,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 5.638145922222223,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 15.909017103422224,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 47.52619310736112,
          "unit": "%"
        }
      },
      "digest": [
        {
          "label": "Fat",
          "tag": "FAT",
          "schemaOrgTag": "fatContent",
          "total": 80.0700652976988,
          "hasRDI": true,
          "daily": 123.18471584261354,
          "unit": "g",
          "sub": [
            {
              "label": "Saturated",
              "tag": "FASAT",
              "schemaOrgTag": "saturatedFatContent",
              "total": 32.107114566912095,
              "hasRDI": true,
              "daily": 160.53557283456047,
              "unit": "g"
            },
            {
              "label": "Trans",
              "tag": "FATRN",
              "schemaOrgTag": "transFatContent",
              "total": 0.35239070289999996,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Monounsaturated",
              "tag": "FAMS",
              "schemaOrgTag": null,
              "total": 15.10005133673696,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Polyunsaturated",
              "tag": "FAPU",
              "schemaOrgTag": null,
              "total": 7.412222949463918,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Carbs",
          "tag": "CHOCDF",
          "schemaOrgTag": "carbohydrateContent",
          "total": 235.0221786486583,
          "hasRDI": true,
          "daily": 78.34072621621944,
          "unit": "g",
          "sub": [
            {
              "label": "Carbs (net)",
              "tag": "CHOCDF.net",
              "schemaOrgTag": null,
              "total": 223.63527720189046,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Fiber",
              "tag": "FIBTG",
              "schemaOrgTag": "fiberContent",
              "total": 11.386901446767839,
              "hasRDI": true,
              "daily": 45.547605787071355,
              "unit": "g"
            },
            {
              "label": "Sugars",
              "tag": "SUGAR",
              "schemaOrgTag": "sugarContent",
              "total": 22.086416013880005,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Sugars, added",
              "tag": "SUGAR.added",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        {
          "label": "Protein",
          "tag": "PROCNT",
          "schemaOrgTag": "proteinContent",
          "total": 79.08789478646668,
          "hasRDI": true,
          "daily": 158.17578957293335,
          "unit": "g"
        },
        {
          "label": "Cholesterol",
          "tag": "CHOLE",
          "schemaOrgTag": "cholesterolContent",
          "total": 158.11909284840826,
          "hasRDI": true,
          "daily": 52.70636428280275,
          "unit": "mg"
        },
        {
          "label": "Sodium",
          "tag": "NA",
          "schemaOrgTag": "sodiumContent",
          "total": 4320.9838182358335,
          "hasRDI": true,
          "daily": 180.04099242649306,
          "unit": "mg"
        },
        {
          "label": "Calcium",
          "tag": "CA",
          "schemaOrgTag": null,
          "total": 1582.2147909872617,
          "hasRDI": true,
          "daily": 158.22147909872618,
          "unit": "mg"
        },
        {
          "label": "Magnesium",
          "tag": "MG",
          "schemaOrgTag": null,
          "total": 174.72989058095834,
          "hasRDI": true,
          "daily": 41.60235490022818,
          "unit": "mg"
        },
        {
          "label": "Potassium",
          "tag": "K",
          "schemaOrgTag": null,
          "total": 900.46085855375,
          "hasRDI": true,
          "daily": 19.158741671356385,
          "unit": "mg"
        },
        {
          "label": "Iron",
          "tag": "FE",
          "schemaOrgTag": null,
          "total": 18.048750156488424,
          "hasRDI": true,
          "daily": 100.27083420271347,
          "unit": "mg"
        },
        {
          "label": "Zinc",
          "tag": "ZN",
          "schemaOrgTag": null,
          "total": 8.214841732844585,
          "hasRDI": true,
          "daily": 74.68037938949622,
          "unit": "mg"
        },
        {
          "label": "Phosphorus",
          "tag": "P",
          "schemaOrgTag": null,
          "total": 1081.2929838339169,
          "hasRDI": true,
          "daily": 154.47042626198814,
          "unit": "mg"
        },
        {
          "label": "Vitamin A",
          "tag": "VITA_RAE",
          "schemaOrgTag": null,
          "total": 517.1139489996251,
          "hasRDI": true,
          "daily": 57.45710544440279,
          "unit": "µg"
        },
        {
          "label": "Vitamin C",
          "tag": "VITC",
          "schemaOrgTag": null,
          "total": 2.1075,
          "hasRDI": true,
          "daily": 2.341666666666667,
          "unit": "mg"
        },
        {
          "label": "Thiamin (B1)",
          "tag": "THIA",
          "schemaOrgTag": null,
          "total": 2.6917392159901667,
          "hasRDI": true,
          "daily": 224.31160133251393,
          "unit": "mg"
        },
        {
          "label": "Riboflavin (B2)",
          "tag": "RIBF",
          "schemaOrgTag": null,
          "total": 2.2058128587641668,
          "hasRDI": true,
          "daily": 169.6779122126282,
          "unit": "mg"
        },
        {
          "label": "Niacin (B3)",
          "tag": "NIA",
          "schemaOrgTag": null,
          "total": 20.852352179725834,
          "hasRDI": true,
          "daily": 130.32720112328647,
          "unit": "mg"
        },
        {
          "label": "Vitamin B6",
          "tag": "VITB6A",
          "schemaOrgTag": null,
          "total": 0.6477210942542917,
          "hasRDI": true,
          "daily": 49.82469955802243,
          "unit": "mg"
        },
        {
          "label": "Folate equivalent (total)",
          "tag": "FOLDFE",
          "schemaOrgTag": null,
          "total": 647.5859101775417,
          "hasRDI": true,
          "daily": 161.89647754438542,
          "unit": "µg"
        },
        {
          "label": "Folate (food)",
          "tag": "FOLFD",
          "schemaOrgTag": null,
          "total": 511.50819917754177,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Folic acid",
          "tag": "FOLAC",
          "schemaOrgTag": null,
          "total": 81.6466266,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "µg"
        },
        {
          "label": "Vitamin B12",
          "tag": "VITB12",
          "schemaOrgTag": null,
          "total": 1.950045684166667,
          "hasRDI": true,
          "daily": 81.25190350694446,
          "unit": "µg"
        },
        {
          "label": "Vitamin D",
          "tag": "VITD",
          "schemaOrgTag": null,
          "total": 0.8457218883333334,
          "hasRDI": true,
          "daily": 5.638145922222223,
          "unit": "µg"
        },
        {
          "label": "Vitamin E",
          "tag": "TOCPHA",
          "schemaOrgTag": null,
          "total": 2.3863525655133335,
          "hasRDI": true,
          "daily": 15.909017103422224,
          "unit": "mg"
        },
        {
          "label": "Vitamin K",
          "tag": "VITK1",
          "schemaOrgTag": null,
          "total": 57.03143172883334,
          "hasRDI": true,
          "daily": 47.52619310736112,
          "unit": "µg"
        },
        {
          "label": "Sugar alcohols",
          "tag": "Sugar.alcohol",
          "schemaOrgTag": null,
          "total": 0.0,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        },
        {
          "label": "Water",
          "tag": "WATER",
          "schemaOrgTag": null,
          "total": 279.87990404677083,
          "hasRDI": false,
          "daily": 0.0,
          "unit": "g"
        }
      ]
    },
    "_links": {
      "self": {
        "title": "Self",
        "href": "https://api.edamam.com/api/recipes/v2/0209cb28fc05320434e2916988f47b71?type=public&app_id=6243309b&app_key=923fd4030f33684dfa16e44aaed9b37b"
      }
    }
  }
  
  export default dataNew;