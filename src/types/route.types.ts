/*
 * route.types.ts
 * Created by Noman Jawad
 * All rights reserved
 */

export type LayoutRouteProps = Readonly<{
  children: React.ReactNode
  params: Promise<{
    slug?: string
    subSlug?: string
  }>
}>

export type DynamicRouteProps = Readonly<{
  children?: React.ReactNode
  params: Promise<{
    slug?: string
    subSlug?: string
  }>
}>
