using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Amaretto",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-amaretto.jpg",
                    Type = "Cake",
                },
                new Product
                {
                    Name = "Alliance",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-alliance-morcov-ghimbir.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Ambassador",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-ambassador.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Belcolade",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-belcolade.png",
                    Type = "Cake",
                },new Product
                {
                    Name = "Carmelita",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-carmelita.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Cheesecake",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-cheesecake-tropiques.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Cocoblanc",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-cocoblanc.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Delicaramel",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-delicaramel.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Diplomat",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-diplomat.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Dom",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-dom-busuioc.png",
                    Type = "Cake",
                },new Product
                {
                    Name = "Evening passion",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-evening-passion.jpg",
                    Type = "Cake",
                },new Product
                {
                    Name = "Exotic passion",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 5000,
                    PictureUrl = "/images/products/cake-exotic-passion.jpg",
                    Type = "Cake",
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}