var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "zoomLevels": 8,
            "maxZoom": 8,
            "base": "",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "world": "world",
            "imgextension": "png",
            "name": "Daytime Render",
            "last_rendertime": 1599173779,
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "path": "day",
            "isOverlay": false,
            "poititle": "Markers",
            "north_direction": 0
        }
    ],
    "map": {
        "controls": {
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1599174169",
        "debug": true,
        "north_direction": "lower-left"
    }
};
