
'use client'
import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function UnitCardCarousel({ images }) {
  if (!images || images.length === 0) {
    return <div>No units to display</div>;
  }

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter className="flex-col items-start">
                  <h3 className="text-lg font-semibold">{image.unitName}</h3>
                  <p className="text-sm text-gray-500">
                    {image.beds} Beds | {image.baths} Baths | {image.sqft} sqft
                  </p>
                  <p className="text-lg font-bold">{image.price}</p>
                </CardFooter>
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
