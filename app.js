<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker App</title>
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <header class="bg-dark text-light p-3 mb-3">
            <h1>Expense Tracker</h1>
        </header>
        <main>
            <form id="expense-form" class="mb-3">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <label for="description" class="form-label">Description:</label>
                        <input type="text" id="description" class="form-control" required>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <label for="amount" class="form-label">Amount:</label>
                        <input type="number" id="amount" class="form-control" required>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-3 mt-md-0">
                        <button type="submit" class="btn btn-primary w-100">Add Expense</button>
                    </div>
                </div>
            </form>
            <div id="expense-list" class="mb-3"></div>
            <div id="total-expenses" class="text-end font-weight-bold"></div>
        </main>
    </div>

    <!-- Include Bootstrap JS (required for some Bootstrap features) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
