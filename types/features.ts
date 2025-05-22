export interface SidebarLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isHot?: boolean;
}

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export interface FooterColumn {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

export interface VideoQualityOption {
  value: string;
  label: string;
}

// 其他类型定义...