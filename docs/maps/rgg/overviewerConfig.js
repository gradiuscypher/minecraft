var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "world": "world",
            "north_direction": 0,
            "minZoom": 0,
            "maxZoom": 8,
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1597553779,
            "imgextension": "png",
            "zoomLevels": 8,
            "base": "",
            "defaultZoom": 1,
            "path": "day"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "overlays": true,
            "mapType": true
        },
        "cacheTag": "1597554164",
        "debug": true,
        "north_direction": "lower-left"
    }
};
