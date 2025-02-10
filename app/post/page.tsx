import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Footer from "@/components/Footer"

interface NewsItem {
  title: string
  date: string
  description: string
  image: string
  alt: string
}

const newsItems: NewsItem[] = [
  {
    title: "Freshmark Foods Launches New Organic Juice Line",
    date: "6/15/2023",
    description: "Introducing our latest range of 100% organic, cold-pressed juices made from locally sourced fruits.",
    image: "/new/juice3.png",
    alt: "Colorful organic juices in glass bottles",
  },
  {
    title: "Sustainability Initiative: Reducing Carbon Footprint",
    date: "5/22/2023",
    description: "Freshmark Foods commits to reducing its carbon footprint by 30% over the next five years.",
    image: "/fd1.jpg",
    alt: "Variety of fresh juices displayed",
  },
  {
    title: "Partnership Announcement: Local Farmers Cooperative",
    date: "4/10/2023",
    description:
      "We're excited to announce our new partnership with the Local Farmers Cooperative to support sustainable agriculture.",
    image: "/fruit.jpg",
    alt: "Industrial food processing equipment",
  },
]

export default function NewsSection() {
  return (
    <section className="w-full pt-12 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="font-bold text-xl leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Footer/>
    </section>
  )
}

