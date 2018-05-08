async function templates(root, args, context, info) {
    const templates = await context.db.query.templates({}, info);
    return templates;
}


module.exports = {
  templates
}