const routes = (
    <Router>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' component={Prompt} />
        </Route>
    </Router>
)

export default routes;