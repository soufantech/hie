import { RoleMatcher } from './role-matcher';
import {
  HierarchicalRoleAuthority,
  RoleHierarchyRepresentation,
} from './hierarchical-role-authority';

/**
 * Creates a hierarchical matcher.
 */
export function hie(
  hierarchy: RoleHierarchyRepresentation = {},
): RoleMatcher['match'] {
  const matcher = new RoleMatcher(new HierarchicalRoleAuthority(hierarchy));

  return matcher.match.bind(matcher);
}
