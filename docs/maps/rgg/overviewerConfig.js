var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "poititle": "Markers",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "base": "",
            "north_direction": 0,
            "world": "world",
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "defaultZoom": 1,
            "last_rendertime": 1595858179,
            "zoomLevels": 8,
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "pan": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "overlays": true
        },
        "cacheTag": "1595858564",
        "north_direction": "lower-left",
        "debug": true
    }
};
