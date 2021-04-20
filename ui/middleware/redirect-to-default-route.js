export default function ({ redirect, route }) {
  // Redirect to default route
  if (route.path === '/') {
    return redirect(301, '/clients');
  }
}
