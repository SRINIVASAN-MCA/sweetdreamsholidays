import React from 'react';
import { tourPackages } from './tourData';
import TourPackages from './TourPackages';

export default function DomesticTours() {
    const domesticPackages = tourPackages.filter(pkg =>
        !['thailand-bangkok-pattaya', 'singapore-gardens', 'bali-island-paradise',
            'malaysia-kuala-lumpur', 'dubai-luxury-experience', 'vietnam-halong-hanoi',
            'sri-lanka-pearl-indian-ocean'].includes(pkg.slug)
    );

    return (
        <div>
            {/* Pass filtered domestic packages to TourPackages component */}
            <TourPackages packages={domesticPackages} title="Domestic Tour Packages" subtitle="Explore the beauty of India with our curated domestic tour packages" />
        </div>
    );
}
