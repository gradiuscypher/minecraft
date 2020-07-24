var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "zoomLevels": 8,
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "north_direction": 0,
            "path": "day",
            "world": "world",
            "last_rendertime": 1595602579,
            "base": "",
            "poititle": "Markers",
            "isOverlay": false,
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "name": "Daytime Render"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595602960",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "spawn": true
        },
        "north_direction": "lower-left"
    }
};
