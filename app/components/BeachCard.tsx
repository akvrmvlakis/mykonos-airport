import Image from "next/image";
import { Beach } from "@/lib/beach-data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BeachCard({ beach }: { beach: Beach }) {
  return (
    <div className="py-8">
      <Card className="w-full max-w-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto">
        <div className="relative w-full aspect-video">
          <Image
            src={beach.imageUrl}
            alt={beach.name}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <p className="text-lg text-black text-start underline font-bold">
            {beach.name}
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2 text-start">
            <div className="flex items-center gap-3">
              <Image
                src="/images/card-pin-vector.svg"
                alt="Pin Icon"
                width={17}
                height={17}
              />
              <p className="text-xs">
                <span className="font-bold">Distance from town:</span>{" "}
                {beach.distance} km
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/thumbs-up-vector.svg"
                alt="Thumbs Up Icon"
                width={17}
                height={17}
              />
              <p className="text-xs">
                <span className="font-bold">Best for:</span>{" "}
                {beach.bestFor.join(", ")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/restaurant-vector.svg"
                alt="Restaurant Icon"
                width={17}
                height={17}
              />
              <p className="text-xs">
                <span className="font-bold">Notable Restaurants:</span>{" "}
                {beach.restaurants.join(", ")}
              </p>
            </div>
            <hr className="border-gray-300 pt-2" />
            <p className="text-xs">
              <span className="font-bold">Description: </span>
              {beach.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="py-4">
          <div className="w-full flex flex-col items-center gap-2">
            <Button className="w-full">Book Taxi to {beach.name}</Button>
            {/* THE FIX: We map over the restaurants array to create a button for each one. */}
            {beach.restaurants.map((restaurant) => (
              <Button key={restaurant} className="w-full bg-blue-600">
                Book Taxi to {restaurant}
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
