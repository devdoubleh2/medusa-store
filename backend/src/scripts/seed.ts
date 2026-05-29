import type { MedusaAppOutput } from "@medusajs/framework/modules-sdk"
import { ContainerRegistrationKeys, Modules, promiseAll } from "@medusajs/framework/utils"

export default async function seedDemo() {
  const remoteLink = ContainerRegistrationKeys.REMOTE_LINK.resolve(
    ContainerRegistrationKeys.CONTAINER
  ) as MedusaAppOutput["remoteLink"]

  const logger = ContainerRegistrationKeys.LOGGER.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  const countryRepo = ContainerRegistrationKeys.MANAGER.resolve(
    ContainerRegistrationKeys.CONTAINER
  ).getRepository("Country")

  const countries = await countryRepo.find({ where: {} })
  if (countries.length > 0) {
    logger.info("Skipping seed data - already exists")
    return
  }

  logger.info("Seeding demo data...")

  const regionService = ContainerRegistrationKeys.REGION_SERVICE.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  const productService = ContainerRegistrationKeys.PRODUCT_SERVICE.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  const salesChannelService = ContainerRegistrationKeys.SALES_CHANNEL_SERVICE.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  const apiKeysModule = ContainerRegistrationKeys.API_KEY_MODULE.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  const userModule = ContainerRegistrationKeys.USER_MODULE.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  const authModule = ContainerRegistrationKeys.AUTH_MODULE.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  const storeModule = ContainerRegistrationKeys.STORE_MODULE.resolve(
    ContainerRegistrationKeys.CONTAINER
  )

  await promiseAll([
    regionService.createRegions({
      name: "Default Region",
      currency_code: "usd",
      countries: ["us"],
    }),
  ])

  logger.info("Seed completed")
}
