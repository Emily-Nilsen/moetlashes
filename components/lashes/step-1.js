import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function Step1() {
  return (
    <div className="pt-10 sm:pt-12">
      <div className="max-w-xl px-4 mx-auto bg-white shadow-lg rounded-3xl h-96 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">Step 1</div>
      </div>
    </div>
  );
}
