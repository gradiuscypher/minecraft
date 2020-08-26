var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "defaultZoom": 1,
            "minZoom": 0,
            "showlocationmarker": true,
            "zoomLevels": 8,
            "path": "day",
            "base": "",
            "name": "Daytime Render",
            "imgextension": "png",
            "last_rendertime": 1598403379,
            "world": "world",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false
        }
    ],
    "map": {
        "cacheTag": "1598403774",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
