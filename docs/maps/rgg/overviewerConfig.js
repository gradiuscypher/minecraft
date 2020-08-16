var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "base": "",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "day",
            "last_rendertime": 1597542979,
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "name": "Daytime Render",
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "minZoom": 0,
            "north_direction": 0
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "overlays": true
        },
        "cacheTag": "1597543364",
        "debug": true,
        "north_direction": "lower-left"
    }
};
