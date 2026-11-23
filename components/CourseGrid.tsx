'use client';

import { COURSES } from '@/lib/data';
import { formatINR } from '@/lib/utils';
import { Play, Star as StarIcon, Users, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {COURSES.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

function CourseCard({ course }: { course: (typeof COURSES)[number] }) {
  const discount = Math.round(((course.originalPrice! - course.price) / course.originalPrice!) * 100);
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-4">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${course.badge === 'HOT' ? 'bg-red-100 text-red-700' : course.badge === 'NEW' ? 'bg-brand-100 text-brand-700' : 'bg-green-100 text-green-700'}`}>
          {course.badge}
        </span>
        {course.badge === 'BESTSELLER' && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-[10px] font-bold">Bestseller</span>
        )}
      </div>
      <div className="relative h-32 mb-4 overflow-hidden rounded-xl">
        <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <span className="flex items-center gap-1 text-xs font-bold text-white bg-black/60 px-2 py-1 rounded">
            <Clock className="w-3 h-3" /> {course.duration}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-white bg-black/60 px-2 py-1 rounded">
            <Users className="w-3 h-3" /> {course.students}
          </span>
        </div>
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-brand-600 transition-colors">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.tagline}</p>
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1"><StarIcon className="w-3 h-3 fill-yellow-400" /> {course.rating}</span>
        <span className="mx-1">·</span>
        <span>{course.languages}</span>
        <span className="mx-1">·</span>
        <span>{course.level}</span>
      </div>
      <div className="flex items-end gap-2 mb-6">
        <span className="text-xl font-bold text-gray-900">{formatINR(course.price)}</span>
        <span className="text-sm text-gray-400 line-through">{formatINR(course.originalPrice!)}</span>
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">-{discount}%</span>
      </div>
      <Link
        href="/creator"
        className="w-full py-3 rounded-xl border border-brand-200 bg-brand-50 text-brand-700 text-sm font-semibold transition-all hover:bg-brand-600 hover:text-white flex items-center justify-center gap-2"
      >
        <Play className="w-4 h-4" /> Enroll Now <ExternalLink className="w-3 h-3" />
      </Link>
    </div>
  );
}
