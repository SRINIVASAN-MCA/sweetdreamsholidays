import React from 'react';
import { tourPackages } from './tourData';
import TourPackages from './TourPackages';

export default function InternationalTours() {
    const internationalPackages = tourPackages.filter(pkg =>
        ['thailand-bangkok-pattaya', 'singapore-gardens', 'bali-island-paradise',
            'malaysia-kuala-lumpur', 'dubai-luxury-experience', 'vietnam-halong-hanoi',
            'sri-lanka-pearl-indian-ocean'].includes(pkg.slug)
    );

    return (
        <div>
            {/* Pass filtered international packages to TourPackages component */}
            <TourPackages packages={internationalPackages} title="International Tour Packages" subtitle="Explore the world with our international tour packages" />
        </div>
    );
}
