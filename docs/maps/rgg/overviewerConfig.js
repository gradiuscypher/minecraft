var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "base": "",
            "isOverlay": false,
            "world": "world",
            "defaultZoom": 1,
            "minZoom": 0,
            "last_rendertime": 1599317779,
            "showlocationmarker": true,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "path": "day",
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0
        }
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "zoom": true
        },
        "cacheTag": "1599318172",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
