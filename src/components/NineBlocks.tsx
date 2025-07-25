// src/pages/operations.tsx
"use client";

import Image from "next/image";

export default function OperationsPage() {
  return (
    <section
      className="w-full bg-white font-[Georgia] py-12 px-4 md:px-8"
    >
      <div className="w-full mx-auto space-y-16">
        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Rectangle 55.png"
              alt="Land mapping, surveying and crop health monitoring"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              1. Land mapping, surveying and crop health monitoring
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              At Smart Farms, we combine the power of DJI Mavic 3 drone technology with Artificial Intelligence (AI) to revolutionize how small-scale farmers manage their land and crops. This integration allows us to deliver smarter, faster, and more accurate insights for decision-making.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              AI-Powered Land Mapping & Surveying
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              Using the Mavic 3’s high-resolution camera, we capture detailed aerial images of farmland. These images are then processed through AI algorithms to generate precise maps, identify terrain variations, and calculate field boundaries with pinpoint accuracy.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/Rectangle 56.png"
              alt="AI-Powered Land Mapping & Surveying"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Rectangle 57.png"
              alt="Intelligent Crop Health Monitoring"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              Intelligent Crop Health Monitoring
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              Our AI systems detect crop stress, pests, and disease patterns from drone imagery. Farmers can respond quickly with targeted treatments, cutting costs and improving yields.
            </p>
          </div>
        </div>

        {/* Block 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              2. Precision Crop Spraying
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              We’re transforming crop spraying using AI and drones to ensure inputs are applied exactly where and when needed.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/Rectangle 58.png"
              alt="Precision Crop Spraying"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Block 5 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Rectangle 59.png"
              alt="Targeted Spraying with Drone Accuracy"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              Targeted Spraying with Drone Accuracy
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              Our GPS-equipped drones apply fertilizers, pesticides, and herbicides with precision, minimizing waste and improving safety.
            </p>
          </div>
        </div>

        {/* Block 6 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              Environmentally Responsible Farming
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              We reduce chemical use and runoff by spraying only where needed. This promotes sustainability and protects ecosystems.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/Rectangle 60.png"
              alt="Environmentally Responsible Farming"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Block 7 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Rectangle 61.png"
              alt="Smart Fertilizer Application with AI and Drone Technology"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              Smart Fertilizer Application with AI and Drone Technology
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              We use AI and drones to apply fertilizers efficiently and sustainably, reducing costs and environmental impact.
            </p>
          </div>
        </div>

        {/* Block 8 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              Precision Application for Maximum Impact
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              Our GPS-guided drones ensure accurate fertilizer delivery, even in hard-to-reach areas.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/Rectangle 63 (1).png"
              alt="Precision Application for Maximum Impact"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Block 9 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Rectangle 55.png"
              alt="AI-Driven Decision Making"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[#72AE1C] text-2xl md:text-[33px] font-bold mb-4">
              AI-Driven Decision Making
            </h2>
            <p className="text-gray-800 text-[18px] md:text-[26px] leading-relaxed italic">
              AI analyzes aerial scans to generate fertility maps, helping apply nutrients only where needed—cutting waste and boosting crop health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
