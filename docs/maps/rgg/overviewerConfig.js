var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "defaultZoom": 1,
            "isOverlay": false,
            "path": "day",
            "bgcolor": "#1a1a1a",
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
            "last_rendertime": 1598082979,
            "showlocationmarker": true,
            "base": "",
            "minZoom": 0,
            "poititle": "Markers",
            "maxZoom": 8,
            "zoomLevels": 8,
            "world": "world",
            "name": "Daytime Render"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "zoom": true
        },
        "cacheTag": "1598083379"
    }
};
