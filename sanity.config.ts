import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {RobotIcon, RocketIcon} from '@sanity/icons'

export default defineConfig([
  {
    projectId: 'ao2ae4ct',
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/production',
    title: 'Production workspace',
    icon: RobotIcon,
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    projectId: 'ao2ae4ct',
    dataset: 'staging',
    name: 'staging-workspace',
    basePath: '/staging',
    title: 'Staging Workspace',
    icon: RocketIcon,
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
])
