import kayakingMangrove from '@/assets/kayaking-mangrove.jpg';
import nandiHillsSunrise from '@/assets/nandi-hills-sunrise.jpg';
import coffeeTrail from '@/assets/coffee-trail.jpg';
import kayakingSunset from '@/assets/kayaking-sunset.jpg';
import boatCruise from '@/assets/boat-cruise.jpg';
import bungeeJumping from '@/assets/bungee-jumping.jpg';
import forestTrail from '@/assets/forest-trail.jpg';
import kayakingFjord from '@/assets/kayaking-fjord.jpg';


export interface TimeSlot {
    time: string;
    available: number;
}

export interface Experience {
    id: string;
    title: string;
    location: string;
    description: string;
    price: number;
    image: string;
    about: string;
    dates: string[];
    timeSlots: TimeSlot[];
}

export const experiences: Experience[] = [
    {
        id: 'kayaking-udupi',
        title: 'Kayaking',
        location: 'Udupi',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 999,
        image: kayakingMangrove,
        about: 'Scenic routes, trained guides, and safety briefing. Minimum age 10.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '07:00 am', available: 4 },
            { time: '09:00 am', available: 2 },
            { time: '11:00 am', available: 5 },
            { time: '1:00 pm', available: 0 },
        ],
    },
    {
        id: 'nandi-hills-sunrise',
        title: 'Nandi Hills Sunrise',
        location: 'Bangalore',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 899,
        image: nandiHillsSunrise,
        about: 'Early morning trek to catch the sunrise. Includes transportation and breakfast.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '04:00 am', available: 8 },
            { time: '04:30 am', available: 6 },
            { time: '05:00 am', available: 3 },
            { time: '05:30 am', available: 0 },
        ],
    },
    {
        id: 'coffee-trail',
        title: 'Coffee Trail',
        location: 'Coorg',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 1299,
        image: coffeeTrail,
        about: 'Walk through coffee plantations, learn about coffee processing, and taste fresh brews.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '08:00 am', available: 10 },
            { time: '10:00 am', available: 8 },
            { time: '02:00 pm', available: 12 },
            { time: '04:00 pm', available: 6 },
        ],
    },
    {
        id: 'kayaking-karnataka',
        title: 'Kayaking',
        location: 'Udupi, Karnataka',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 999,
        image: kayakingSunset,
        about: 'Helmet and Life jackets along with an expert will accompany in kayaking.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '07:00 am', available: 4 },
            { time: '09:00 am', available: 2 },
            { time: '11:00 am', available: 5 },
            { time: '1:00 pm', available: 0 },
        ],
    },
    {
        id: 'boat-cruise',
        title: 'Boat Cruise',
        location: 'Sunderban',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 999,
        image: boatCruise,
        about: 'Luxury boat cruise through mangrove forests with wildlife spotting opportunities.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '09:00 am', available: 15 },
            { time: '12:00 pm', available: 12 },
            { time: '03:00 pm', available: 10 },
            { time: '06:00 pm', available: 8 },
        ],
    },
    {
        id: 'bungee-jumping',
        title: 'Bunjee Jumping',
        location: 'Manali',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 999,
        image: bungeeJumping,
        about: 'Extreme adventure with professional safety measures. Minimum age 18.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '10:00 am', available: 5 },
            { time: '12:00 pm', available: 3 },
            { time: '02:00 pm', available: 4 },
            { time: '04:00 pm', available: 2 },
        ],
    },
    {
        id: 'forest-coffee-trail',
        title: 'Coffee Trail',
        location: 'Coorg',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 1299,
        image: forestTrail,
        about: 'Misty morning walks through coffee estates with expert guide and tasting session.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '06:00 am', available: 8 },
            { time: '08:00 am', available: 10 },
            { time: '10:00 am', available: 6 },
            { time: '12:00 pm', available: 4 },
        ],
    },
    {
        id: 'kayaking-fjord',
        title: 'Kayaking',
        location: 'Udupi, Karnataka',
        description:
            'Curated small-group experience. Certified guide. Safety first with gear included.',
        price: 999,
        image: kayakingFjord,
        about: 'Paddle through scenic waterways with professional guidance and equipment.',
        dates: ['Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
        timeSlots: [
            { time: '07:00 am', available: 4 },
            { time: '09:00 am', available: 2 },
            { time: '11:00 am', available: 5 },
            { time: '1:00 pm', available: 0 },
        ],
    },
];
