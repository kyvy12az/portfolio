// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  facebook,
  tiktok,
  instagram,
  github,
  php,
  cpp,
  python,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  { id: "projects", title: "Dự Án", link: null },
  {
    id: "about",
    title: "Giới Thiệu",
    link: null,
  },
  {
    id: "work",
    title: "Công Việc",
    link: null,
  },
  {
    id: "contact",
    title: "Liên Hệ",
    link: null,
  },
  {
    id: "source-code",
    title: "Mã Nguồn",
    link: "http://www.github.com/sanidhyy/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Lập Trình Viên Web",
    icon: web,
  },
  {
    title: "Lập Trình Viên React Native",
    icon: mobile,
  },
  {
    title: "Lập Trình Viên Backend",
    icon: backend,
  },
  {
    title: "Người Sáng Tạo Nội Dung",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Lập Trình Viên React.js",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Tháng 3 năm 2020 - Tháng 4 năm 2021",
    points: [
      "Phát triển và bảo trì ứng dụng web sử dụng React.js và các công nghệ liên quan.",
      "Hợp tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các lập trình viên khác để tạo ra sản phẩm chất lượng cao.",
      "Triển khai thiết kế responsive và đảm bảo tương thích đa trình duyệt.",
      "Tham gia đánh giá mã nguồn và cung cấp phản hồi xây dựng cho các lập trình viên khác.",
    ],
  },
  {
    title: "Lập Trình Viên React Native",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Tháng 1 năm 2021 - Tháng 2 năm 2022",
    points: [
      "Phát triển và bảo trì ứng dụng web sử dụng React.js và các công nghệ liên quan.",
      "Hợp tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các lập trình viên khác để tạo ra sản phẩm chất lượng cao.",
      "Triển khai thiết kế responsive và đảm bảo tương thích đa trình duyệt.",
      "Tham gia đánh giá mã nguồn và cung cấp phản hồi xây dựng cho các lập trình viên khác.",
    ],
  },
  {
    title: "Lập Trình Viên Web",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Tháng 1 năm 2022 - Tháng 1 năm 2023",
    points: [
      "Phát triển và bảo trì ứng dụng web sử dụng React.js và các công nghệ liên quan.",
      "Hợp tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các lập trình viên khác để tạo ra sản phẩm chất lượng cao.",
      "Triển khai thiết kế responsive và đảm bảo tương thích đa trình duyệt.",
      "Tham gia đánh giá mã nguồn và cung cấp phản hồi xây dựng cho các lập trình viên khác.",
    ],
  },
  {
    title: "Lập Trình Viên Full Stack",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Tháng 1 năm 2023 - Hiện tại",
    points: [
      "Phát triển và bảo trì ứng dụng web sử dụng React.js và các công nghệ liên quan.",
      "Hợp tác với các nhóm đa chức năng bao gồm nhà thiết kế, quản lý sản phẩm và các lập trình viên khác để tạo ra sản phẩm chất lượng cao.",
      "Triển khai thiết kế responsive và đảm bảo tương thích đa trình duyệt.",
      "Tham gia đánh giá mã nguồn và cung cấp phản hồi xây dựng cho các lập trình viên khác.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Tôi nghĩ rằng không thể tạo ra một trang web đẹp như sản phẩm của chúng tôi, nhưng Rick đã chứng minh tôi sai.",
    name: "Sara Lee",
    designation: "Giám đốc Tài chính",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "Tôi chưa bao giờ gặp một lập trình viên web nào thực sự quan tâm đến sự thành công của khách hàng như Rick.",
    name: "Chris Brown",
    designation: "Giám đốc Vận hành",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "Sau khi Rick tối ưu hóa trang web của chúng tôi, lưu lượng truy cập tăng 50%. Chúng tôi không thể cảm ơn đủ!",
    name: "Lisa Wang",
    designation: "Giám đốc Công nghệ",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "VibeMarket",
    description:
      "VibeMarket là nền tảng mua sắm thông minh kết hợp kết nối cộng đồng, giúp người dùng tìm kiếm sản phẩm phù hợp, chia sẻ trải nghiệm và giao tiếp trực tiếp với cộng đồng.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/kyvy12az",
    live_site_link: "https://vibemarket.kyvydev.id.vn/",
  },
  {
    name: "GreenMap",
    description:
      "GreenMap là nền tảng giúp cộng đồng nhận diện các khu vực trồng cây, tham gia các hoạt động bảo vệ môi trường và đóng góp vào dự án 'Plant a Tree, Change the World'. Người dùng có thể theo dõi tiến độ, chia sẻ vị trí cây trồng và kết nối với những người cùng quan tâm.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: project2, 
    source_code_link: "https://github.com/kyvy12az/",
    live_site_link: "https://greenmap.talentvku.id.vn/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/kyvy.nguyen.2k6",
  },
  {
    name: "TikTok",
    icon: tiktok,
    link: "https://www.tiktok.com/@valt_1902",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/valt_1902",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/kyvy12az",
  },
] as const;
