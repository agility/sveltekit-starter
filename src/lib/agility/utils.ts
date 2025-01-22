export function getPageComponents(pageData: any): any {
    const components: any = {};
    if (!pageData || !pageData.zones) {
        return components;
    }
    for (const [zoneName, zoneModules] of Object.entries(pageData.zones)) {
      components[zoneName] = (zoneModules as any[]).map((module: any) => {
        return {
          ...module,
        };
      });
    }
    return components;
}