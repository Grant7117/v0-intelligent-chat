from playwright.sync_api import sync_playwright, Page, expect

def test_carousel_images_are_visible(page: Page):
    """
    This test verifies that the lifestyle and unit card carousels are
    visible and displaying images on the homepage.
    """
    print("Starting test...")
    # 1. Arrange: Go to the application homepage.
    print("Navigating to http://localhost:3000...")
    page.goto("http://localhost:3000")
    print("Navigation complete.")

    # 2. Assert: Check that the lifestyle carousel is visible.
    print("Locating lifestyle carousel...")
    lifestyle_carousel = page.locator("#lifestyle")
    expect(lifestyle_carousel).to_be_visible()
    print("Lifestyle carousel is visible.")

    # 3. Assert: Check that the unit card carousel is visible.
    print("Locating unit card carousel...")
    unit_card_carousel = page.locator("#floor-plans")
    expect(unit_card_carousel).to_be_visible()
    print("Unit card carousel is visible.")

    # 4. Screenshot: Capture the final result for visual verification.
    print("Taking screenshot...")
    page.screenshot(path="jules-scratch/verification/verification.png")
    print("Screenshot taken.")

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        test_carousel_images_are_visible(page)
        browser.close()

if __name__ == "__main__":
    run()
