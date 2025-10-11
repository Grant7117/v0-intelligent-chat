
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function LifestyleCarousel({ slides }) {
  if (!slides || slides.length === 0) {
    return <div>No slides to display</div>;
  }

  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {slides.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-video items-center justify-center p-6">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
