import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26570234109e159e89de_thumbnail_27.jpeg",
    title: "What to Do After a Car Accident",
    slug: "what-to-do-after-car-accident",
    description:
      "A complete guide on essential steps after a car accident to protect your rights.",
    category: "WHAT TO DO AFTER A CAR ACCIDENT",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265b4bd0bf566234ad16_thumbnail_20.jpeg",
    title: "How to Determine Who Is at Fault",
    slug: "how-to-determine-fault-car-accident",
    description:
      "Understanding fault determination in car accidents and establishing liability.",
    category: "WHAT TO DO AFTER A CAR ACCIDENT",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb078a6d18d5f58ffbc94e_shutterstock_1861344154-min.jpeg",
    title: "How to Deal With Rideshare Accidents",
    slug: "rideshare-accidents-guide",
    description:
      "Navigate Uber and Lyft accident claims with our comprehensive guide.",
    category: "WHAT TO DO AFTER A CAR ACCIDENT",
  },
];

const ResourceGallery = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider">
            LEGAL RESOURCES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Resource Center
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert legal guides to help you navigate your case successfully
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Link key={index} href={`/blog/${resource.slug}`}>
              <Card
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all h-full flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white px-3 py-1 text-xs font-semibold text-foreground uppercase tracking-wider">
                      {resource.category}
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-background flex-1 flex flex-col">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium text-sm pt-2 border-t">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/resources">
              View All Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourceGallery;
